import React from 'react'

function fil(arr, query, Value){
    return arr.map((item, index) => {
        if(item.title.toLowerCase().indexOf(query.toLowerCase()) > -1 || 
            item.ingredients.toLowerCase().indexOf(query.toLowerCase()) > -1 ){
            return <Value key={index} title={item.title}
                            ingredients={item.ingredients} thumbnail={item.thumbnail}
                            link={item.href}                         
                    />
        }
    })
}

export default fil