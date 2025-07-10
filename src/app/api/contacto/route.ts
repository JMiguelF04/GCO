import { NextResponse } from 'next/server'
import pool from '@/lib/mysql'

export async function POST(req: Request) {
    try {
        const { nome, email, assunto, mensagem} = await req.json()

        if (!nome || !email || !assunto || !mensagem) {
            return NextResponse.json({erro: 'Campos obrigatórios em falta.'}, {status:400})
        }

        const [result] = await pool.execute(
            'INSERT INTO contacto (nome, email, assunto, mensagem) VALUES (?,?,?,?)',
            [nome, email, assunto, mensagem]
        )
        
        return NextResponse.json({ sucesso: true, id: (result as any).insertId})
    } catch (error) {
        console.error(error)
        return NextResponse.json({erro: 'Erro interno.'}, {status:500})
    }
}
