import { render } from '@testing-library/react'
import React, { Component } from 'react'
import Form from '../components/Form'
import Loading from '../components/Loading'
import Recipes from '../components/Recipes'
import { getRecipes } from '../services/api'

class RecipesContainer extends Component {
    state = {
        recipeName: '',
        recipes: [],
        isLoading: false
    }

    fetchRecipes = e => {
        const { recipeName } = this.state
        e.preventDefault()

        this.setState({
            isLoading: true
        })

        getRecipes(recipeName).then(
            recipes => {
                // console.log('recipes', recipes)
                this.setState
            }
        )
    }

    render() {
        const { isLoading } = this.state
        return (
            <div>
                <Form
                    onInputChange={this.handleInputChange}
                    onSubmit={this.fetchRecipes}
                />
                {isLoading ? <Loading /> : <Recipes recipes={recipes} />}
            </div>
        )
    }

}

export default RecipesContainer
