import inquirer from 'inquirer';
import fs from 'fs';

const questions = [
    {
        type: 'input',
        name: 'title',
        message: "Please enter course title?"
    },
    {
        type: 'number',
        name: 'price',
        message: "Please enter course price?"
    }
];


function questionAdd() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers)

            if(fs.existsSync(filePath)) {
                fs.readFile(filePath, 'utf8', (err, fileContent) => {
                    if (err) {
                        console.log("Error", err);
                        process.exit();
                    }
                    console.log("File content: ", fileContent)
                    const fileContentJson = JSON.parse(fileContent);
                    fileContentJson.push(answers);
                    fs.writeFile(filePath, JSON.stringify(fileContentJson), 'utf8', () => {
                        console.log("[+] Add course done.")
                    });
                });
            } else {
                fs.writeFile(filePath, JSON.stringify([answers]), 'utf8', () => {
                    console.log("[+] Add course done.")
                });
            }

        })
        .catch((error) => {
            if (error.isTtyError) {

            } else {

            }
        });
}

export default questionAdd;