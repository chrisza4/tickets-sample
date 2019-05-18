import React from 'react'

import { storiesOf } from '@storybook/react'
import { TicketsPage } from './TicketsPage'

storiesOf('TicketsPage', module)
  .add('Loading', () => <TicketsPage loading />)
  .add('Zero row', () => <TicketsPage tickets={[]} />)
  .add('With rows', () => (
    <TicketsPage
      tickets={[
        {
          id: 39730,
          title: 'mobile',
          description:
            'Dolorem animi sunt eveniet mollitia ea laborum numquam cumque. Ex quas dolor voluptas modi aut. Et non natus a.\n \rDelectus et possimus laudantium atque sequi excepturi dolores quia. Necessitatibus unde quod adipisci libero eum sunt voluptate. Sit nobis quis et qui modi ipsum rem eos.\n \rNon ex iure. Sunt consequatur aliquid ipsa et earum et. Ad molestiae iusto iste ducimus enim molestias. Aut maxime veritatis minima et odit nostrum.',
          assignee: 'Jakubowski',
          status: 'unresolved',
          date: '1 day ago',
        },
        {
          id: 33883,
          title: 'navigate',
          description:
            'Eius ipsum qui minus debitis libero doloribus et. Perferendis ipsam necessitatibus dolor. Eligendi magnam beatae est eligendi aut quos in. Atque ipsum vel commodi.\n \rQuisquam vel voluptas explicabo natus omnis aut accusantium. Placeat dolor quam fugit aut repellendus voluptatibus omnis doloribus. Cumque dicta velit omnis. Culpa veniam fugiat et est debitis doloremque et perspiciatis officiis. Impedit ut non nemo omnis consequuntur velit sed debitis quod. Dolores odit et quisquam sit labore.\n \rQuia libero qui et ipsam eos. Expedita saepe perferendis vel. Hic dolores et tempore est aliquid numquam culpa. Qui impedit impedit et voluptate voluptas aspernatur nemo dicta consequatur. Sunt distinctio magni praesentium fuga similique doloremque. Praesentium necessitatibus vel est fugiat distinctio fugiat.',
          assignee: 'Pouros',
          status: 'unresolved',
          date: '1 day ago',
        },
      ]}
    />
  ))
