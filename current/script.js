var fs = require('fs')

let files = fs.readdirSync(__dirname)
let filetypes = [
    'js',
    'ts',
    'java',
    'c',
    'cpp',
    'rs',
    'py'
]

fs.writeFileSync('todo',"DO NOT EDIT, FILE AUTO WRITTEN WITH TODOS FROM SUBFOLDERS\n\n")

for(let file of files){
    try{
        let codefiles = fs.readdirSync(file)
        for(let codefile of codefiles){
            let ext = codefile.split(".")[1]
            if(filetypes.includes(ext)){
                let path = file+"/"+codefile
                let code = fs.readFileSync(path)
                code = code.toString()
                code.split("\n").forEach((e) => {
                    if(e.includes("todo")){
                        let todo = path + e.split("todo")[1].toString() + "\n"
                        fs.appendFileSync('todo',todo)
                    }
                })
            }
        }
        
    }
    catch(err){
        //this is a file
        ;
    }

}



