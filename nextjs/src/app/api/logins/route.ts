// import connectDB from '@/lib/connectDB'
import connectDB from '@/lib/connectDB';
import user from '@/models/user';
import { NextRequest, NextResponse } from 'next/server'


export async function POST(req: any, res: any) {
    connectDB()
    const body = await req.json();
    const { name, email, password } = body;
    if (name && email && password) {
        try {
            // Hash password to store it in DB
            var passwordhash = password;
            var users: any = new user({
                name,
                email,
                password: passwordhash,
            });
            var usercreated = await users.save();
            return NextResponse.json({ Data: { message: "User Created" } }, { status: 200 });
        } catch (error: any) {
            return NextResponse.json({ error: { message: error.message } }, { status: 500 });
        }
    } else {
        return NextResponse.json({ error: { message: "data_incomplete" } }, { status: 422 });
    }
}

