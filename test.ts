import mysql from 'mysql2/promise'

async function main() {
  try {
    const conn = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'DevTest123!',
      database: 'gco_dev',
    })

    const [rows] = await conn.query('SELECT NOW()')
    console.log('Ligação bem-sucedida:', rows)

    await conn.end()
  } catch (err) {
    console.error('Erro na ligação MySQL:', err)
  }
}

main()
