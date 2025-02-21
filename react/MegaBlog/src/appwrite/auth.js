import conf from '..conf.js';
import { Client, Account, ID } from "appWrite";

export class Authservice{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId);
        this.account=new Account(this.client);
        
    }
    async createAccount({email, password, name}){
        try{
            const userAccount=await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
               return this.login({email, password});
            }else{
               return userAccount;
            }
        }catch(error){
            throw error;
        }
    }

    async login({email, password}){
        try{
            return await this.account.createEmailSession 
            (email, password);
        }catch(error){
            throw error;
        }
    }

    async getCurrentUser(){
        try{
           return await this.account.get();
        }catch(error){
            console.log("AppWrite Service ::getCurrentUser :: error", error);
        }
        return null;
    }

    async logout(){
        try{
            await this.account.deleteSession('current');
        }catch(error){
            console.log("AppWrite Service :: logout :: error",error);
        }
    }
}
   
const authService= new Authservice();

export default authService