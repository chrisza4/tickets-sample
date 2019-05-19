/* eslint-disable no-unused-expressions */
import React from 'react'
import moment from 'moment'
import { expect } from 'chai'
import { mount } from 'enzyme'

import TicketRow from './TicketRow'

describe('TicketRow', () => {
  const resolvedTicket = {
    id: 52030,
    title: 'index',
    description:
      'Veniam impedit commodi molestias tempora iure inventore. In dolor consequatur maxime. Consequuntur velit beatae est laboriosam quo qui dicta fuga. Natus aperiam in. Omnis voluptatum repellat magnam veniam amet aut distinctio dolores. Deleniti mollitia officia sunt.\n \rEt nisi omnis. Maxime optio excepturi necessitatibus qui suscipit est. Libero soluta dignissimos assumenda et aut ab voluptatem omnis velit. Molestiae ex molestiae eligendi possimus rem.\n \rTempora ea ipsum. Iste aut veniam possimus. Dolor adipisci voluptas a. Et consectetur qui qui cum quam accusamus itaque rerum harum. Ex error error beatae quo dolorem maiores commodi qui sequi. Eum et omnis voluptatem ut.',
    assignee: 'Klein',
    status: 'resolved',
    date: '2019-05-19T04:47:32.998Z',
  }
  const normalTicket = {
    id: 52030,
    title: 'index',
    description:
      'Veniam impedit commodi molestias tempora iure inventore. In dolor consequatur maxime. Consequuntur velit beatae est laboriosam quo qui dicta fuga. Natus aperiam in. Omnis voluptatum repellat magnam veniam amet aut distinctio dolores. Deleniti mollitia officia sunt.\n \rEt nisi omnis. Maxime optio excepturi necessitatibus qui suscipit est. Libero soluta dignissimos assumenda et aut ab voluptatem omnis velit. Molestiae ex molestiae eligendi possimus rem.\n \rTempora ea ipsum. Iste aut veniam possimus. Dolor adipisci voluptas a. Et consectetur qui qui cum quam accusamus itaque rerum harum. Ex error error beatae quo dolorem maiores commodi qui sequi. Eum et omnis voluptatem ut.',
    assignee: 'Klein',
    status: 'unresolved',
    date: '2019-05-19T04:47:32.998Z',
  }
  const unresolvedForLongTicket = {
    id: 52030,
    title: 'index',
    description:
      'Veniam impedit commodi molestias tempora iure inventore. In dolor consequatur maxime. Consequuntur velit beatae est laboriosam quo qui dicta fuga. Natus aperiam in. Omnis voluptatum repellat magnam veniam amet aut distinctio dolores. Deleniti mollitia officia sunt.\n \rEt nisi omnis. Maxime optio excepturi necessitatibus qui suscipit est. Libero soluta dignissimos assumenda et aut ab voluptatem omnis velit. Molestiae ex molestiae eligendi possimus rem.\n \rTempora ea ipsum. Iste aut veniam possimus. Dolor adipisci voluptas a. Et consectetur qui qui cum quam accusamus itaque rerum harum. Ex error error beatae quo dolorem maiores commodi qui sequi. Eum et omnis voluptatem ut.',
    assignee: 'Klein',
    status: 'unresolved',
    date: '2019-01-19T04:47:32.998Z',
  }

  it('renders resolved style for resolved ticket', () => {
    const wrapper = mount(
      <table>
        <tbody>
          <TicketRow ticket={resolvedTicket} />
        </tbody>
      </table>
    )
    expect(wrapper.exists('.ax-resolved-row')).to.be.true
  })

  it('renders normal style for non-resolved ticket', () => {
    const wrapper = mount(
      <table>
        <tbody>
          <TicketRow ticket={normalTicket} />
        </tbody>
      </table>
    )
    expect(wrapper.exists('.ax-resolved-row')).to.be.false
  })

  it('renders normal style for non-resolved ticket', () => {
    const wrapper = mount(
      <table>
        <tbody>
          <TicketRow ticket={normalTicket} />
        </tbody>
      </table>
    )
    expect(wrapper.exists('.ax-resolved-row')).to.be.false
  })

  it('render danger style for non-resolved ticket that pending for way too long', () => {
    const wrapper = mount(
      <table>
        <tbody>
          <TicketRow ticket={unresolvedForLongTicket} />
        </tbody>
      </table>
    )
    expect(wrapper.exists('.ax-unresolved-too-long-row')).to.be.true
  })
})
