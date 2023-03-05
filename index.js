class Username{
    constructor(photoUrl,username,email,age,location)
    {
        this.photoUrl = photoUrl;
        this.username = username;
        this.email = email;
        this.age = age;
        this.location = location;
    }

    render()
    {
        document.getElementById("profile-pic").src=this.photoUrl;
        document.getElementById("name").innerHTML = this.username;
        document.getElementById("email").innerHTML = this.email;
        document.getElementById("age").innerHTML = this.age;
        document.getElementById("location").innerHTML = this.location;
    }
}


let profile = new Username('https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/333308661_922445719172864_6674395010604353488_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zdvVT3ybjaQAX9lbfaK&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDaN_bNt5f_QvmS3E6g4CuE74wF47ko7yydJ0jvVXIFDQ&oe=64095042',
"Phan Hoàng Quốc Bảo","phqb2k6@gmail.com",17,"Nha Trang");
profile.render();