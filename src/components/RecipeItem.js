import React from 'react'

const RecipeItem = ({title, ingredients, thumbnail, link}) => (
    <div className="col-sm-3 mt-4">
        <div className="card">
            <img className="card-img-top img-contain" src={thumbnail} alt="" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    <strong>Ingredients: </strong>{ingredients}
                </p>
            </div>
        </div>
    </div>
)

export default RecipeItem;