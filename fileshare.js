// we will learn about reading from file

const { log } = require("console")
const fs = require("fs")
// fs module can be used to read fro a file and delete from a file

// fs.writeFile("sample.txt", "bad boys are cool", function(err) {
//     if(err) {
//         console.log("An error occurred");
//         return
//     }
//     console.log("File Created.");
// });

// you can add a call back to handle if the file was created or not


// fs.readFile("sample.txt", function(err, data) {
//     if (err) {
//         console.log("An error occurred", err);
//         return;
//     }

//     console.log(data.toString());

// })

// USE UNLINK TO DELETE A FILE

// fs.unlink("sample.txt", function(err) {
//     if(err) {
//         console.log(err);
//         return;
//     }

//     console.log("File deleted successfully");

// })

// we use a return statement instead of if else statement, that way the code is more readable, and when you want to have multiple if statements you can just add return at the end of each if statement, and then continue your code instead of adding else

// function register(password, username) {

//     if(password.length < 6) {
//         console.log("Password is too short");
//         return;
//     }

//     if(username.length < 10) {
//         console.log("Your username is too short");
//         return;
//     }

//     fs.writeFile("user.txt", `${username}, ${password}`, function(err) {
//         if(err) {
//             console.log(err);
//             return;
//         }

//         console.log("User created successfully!");

//     })

// }
// register("fadav2222", "adeboye33332");





// fs.unlink("user.txt", function(err) {
//     if(err) {
//         console.log("An error occurred");
//         return;
//     }
    
//     console.log("File deleted successfully");

// })


// CREATING A FOLDER USING THE FS MODULE

// fs.mkdir("lois", function(err) {
//     if(err) {
//         console.log(err);
//         return;
//     }

//     console.log("Folder created successfully");
// });

// fs.writeFile("./lois/sample.txt", "This file is for loois", function(err) {
//     if(err) {
//         console.log(err);
//         return;
//     }

//     console.log("file created successfully");

// })

// fs.unlink("./lois/sample.txt", (error) => {
//     if(error) return console.log(error);

//     console.log("Deleted successfully");
// });

// fs.rm("lois", {recursive: true}, (err) => {
//     if(err) return console.log("Folder deleted successfully");
// });

// in order to delete any folder together file inside you include recursive: true

fs.writeFile("user.txt", "victor, victor", (err) => {
    if(err) return console.log(err);

    console.log("File created successfully");

    fs.appendFile("user.txt", "\neshet, eshet", (err) => {
        if(err) return console.log(err);
    
        console.log("Append Successful");
    });
    
});

