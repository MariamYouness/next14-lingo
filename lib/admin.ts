import { auth } from "@clerk/nextjs/server";


const adminIds= [
    "user_2kQ3wtGcjpERqBspE67aPzTPIG8",
];


export const isAdmin=  () => {
    const {userId} = auth();

    if(!userId) {
        return false;
    }

    return adminIds.indexOf(userId) !== -1;
 };
