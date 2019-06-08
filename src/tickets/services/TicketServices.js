import { authenticatedRest } from '../../api/client'

export async function fetchTickets() {
  try {
    const response = await authenticatedRest('GET', '/tickets')
    return {
      ok: true,
      tickets: response.data.data,
    }
  } catch (err) {
    return {
      ok: false,
      error: err.message,
    }
  }
}

export async function setStatus(ids, status) {
  try {
    const response = await authenticatedRest('POST', '/tickets/status', {
      ids,
      status,
    })
    return {
      ok: true,
      tickets: response.data.data,
    }
  } catch (err) {
    return {
      ok: false,
      error: err.message,
    }
  }
}
