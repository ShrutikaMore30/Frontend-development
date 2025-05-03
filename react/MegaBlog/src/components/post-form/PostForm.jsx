import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import firebaseService from "../../firebase/firebaseService"; // ✅ Correct import
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { uploadImageToCloudinary } from "../../cloudinary/cloudinaryService";


export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.id || "",         // ✅ Corrected
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    // if (!userData || !userData.uid) {
    //     alert("User not authenticated!");
    //     return;
    //   }

      //kuch console.log(userData); 
    const [loading, setLoading] = useState(false);

    const submit = async (data) => {
        setLoading(true);
        try {
            if (post) {
                const file = data.image?.[0] ? await uploadFileToCloudinary(data.image[0]) : null; // yaha change kiya


                if (file && post?.featuredImage) {
                    await firebaseService.deleteFileFromUrl(post.featuredImage); // ✅ Corrected
                }

                await firebaseService.updatePost(post.id, {
                    ...data,
                    featuredImage: file ? file : post.featuredImage,
                });

                navigate(`/post/${post.id}`); // ✅ Corrected
            } else {
                const file = data.image?.[0] ? await uploadImageToCloudinary(data.image[0]) : null;

                if (file) {
                    data.featuredImage = file;
                    const dbPost = await firebaseService.createPost({ ...data, userId: userData.uid });

                    if (dbPost) {
                        navigate(`/post/${dbPost.id}`); // ✅ Corrected
                    }
                }
            }
        } catch (error) {
            console.error("Error submitting post:", error);
            alert("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return subscription?.unsubscribe ? () => subscription.unsubscribe() : undefined;
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && post.featuredImage && (
                    <div className="w-full mb-4">
                        <img
                            src={post.featuredImage}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full" disabled={loading}>
                    {loading ? "Loading..." : post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}
