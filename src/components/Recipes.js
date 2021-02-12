import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const getStyles = makeStyles(theme => {
    root: {
        margin: '5em 0'
    }
})

const Recipes = props => {
    const classes = getStyles()
    return (
        <div className='container'>
            <Grid container className={classes.Grid} spacing={5}>
                {props.recipes.map(recipeObject => {
                    const { uri, label, image, source } = recipeObject.recipe
                    ß
                })}
            </Grid>
        </div>
    )
}

export default Recipes
