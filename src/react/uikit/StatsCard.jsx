import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const StatsCard = props => {
  return (
    <Card>
      <CardContent>
        <Typography
          align="center"
          color="primary"
          gutterBottom
          variant="h3"
          component="h2"
        >
          {props.number}
        </Typography>
        <Typography align="center" color="textSecondary">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  )
}

StatsCard.propTypes = {
  number: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
}

export default StatsCard
