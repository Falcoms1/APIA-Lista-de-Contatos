import express from 'express'
import { createContact, deleteContact, getContacts } from '../services/contact.js'

const router = express.Router()

router.post("/contato", async (req, res) => {
    const { name } = req.body

    //validação 
    if (!name || name.lenght < 2) {
        return res.status(404).json({ erro: 'Precisa ter pelo menos 2 caracteres' })
    }
    //processamento
    await createContact(name);
    return res.status(201).json('nome criado com sucesso')
})


router.get('/contatos', async (req, res) => {
    let list = await getContacts()
    res.json({ contatos: list })
})


router.delete('/contato', async (req, res) => {
    const { name } = req.query

    if (!name) {
        return res.json({ erro: 'nome inválido' })
    }

    await deleteContact(name as string)
    res.json({ contato: name })
})

export default router

