import prisma from "@/utils/db";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import NextAuth, {Account, User as AuthUser} from "next-auth";
import { nanoid } from "nanoid";
export const authOptions: any = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "text"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials: any){
                try{
                    const user = await prisma.user.findFirst({where: {email: credentials.email}});
                    if(!user){
                        return null;
                    }
                    const isPasswordCorrect = await bcrypt.compare(credentials.password,user.password!);
                    if(!isPasswordCorrect){
                        return null;
                    }
                    return user;
                }catch(error: any){
                    throw new Error(error);
                }
            }
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? ""
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID ?? "",
            clientSecret: process.env.GOOGLE_SECRET ?? "",
            authorization: {
                params: {
                    prompt: "consent select_account"
                }
            }
        })
    ],
    callbacks: {
        async signIn({user,account}: {user: AuthUser,account: Account}){
            if(account.provider == "credentials"){
                return true;
            }
            if(account.provider == "github"){
                try {
                    const existingUser = await prisma.user.findFirst({where: {email: user.email!}});
                    if(!existingUser){
                        await prisma.user.create({
                            data: {
                                id: nanoid() + "",
                                email: user.email!
                            }
                        });
                    }
                    return true;
                } catch (error) {
                    console.log("Error saving user", error);
                    return false;
                }
            }
            if(account.provider == "google"){
                try {
                    const existingUser = await prisma.user.findFirst({where: {email: user.email!}});
                    if(!existingUser){
                        await prisma.user.create({
                            data: {
                                id: nanoid() + "",
                                email: user.email!
                            }
                        })
                    }
                    return true;
                } catch (error) {
                    console.log("Error saving user", error);
                    return false;
                }
            }
        }
    }
}

export const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};