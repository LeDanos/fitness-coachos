export const signUp = async (formData:User) => {
    const res = await fetch("http://localhost:4000/api/v1/user", {
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(formData),
        method:"POST"
    });
    const data = await res.json();
    return {
        status: res.status,
        msg: data.msg
    }
}

export type User = {
    email?:string,
    username?:string,
    firstName?:string,
    lastName?:string,
    birthday?:string,
    weight?:number,
    height?:number,
    banner?:string,
    picture?:string,
    stats?:string,
    password?:string,
    verified?:boolean,
    createdAt?:string,
    updatedAt?:string,
}