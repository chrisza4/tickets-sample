import { authenticatedRest } from '../../api/client'

export async function fetchTickets() {
  try {
    const response = await authenticatedRest('GET', '/tickets')
    return {
      ok: true,
      tickets: response.data.data,
    }
  } catch (err) {
    console.log(err)
    return {
      ok: false,
      error: err.message,
    }
  }
}
