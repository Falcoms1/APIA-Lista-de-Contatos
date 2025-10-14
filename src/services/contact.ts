import { readFile, writeFile } from "fs/promises"

const dataFile = './data/list.txt'

export const getContacts = async ()=>{
     let list: string[] = []
        try {
            const data = await readFile(dataFile, { encoding: 'utf8' })
            list = data.split('\n')
        } catch (error) { }

        return list
}

export const createContact = async (name:string) =>{

      let list = await getContacts()
    
        //caso o arquivo não exista...
        list.push(name) //insere o nome enviado pela requisição na array
        await writeFile(dataFile, list.join('\n'))  // reescreve o arquivo com a array já lida 

}

export const deleteContact = async(name:string) =>{
     let list = await getContacts()


    list = list.filter(item => item !== name)

    await writeFile(dataFile, list.join('\n'))
}