import React from 'react'

function fil(arr, query, Value){
    return arr.map((item, index) => {
        if(item.title.toLowerCase().indexOf(query.toLowerCase()) > -1 || 
            item.ingredients.toLowerCase().indexOf(query.toLowerCase()) > -1 ){

                let partsTitle = item.title.split(new RegExp(`(${query})`, 'gi'));
                let valorTitle = partsTitle.map((part, index) => {
                    if(part.toLowerCase() === query.toLowerCase()){
                        return <mark key={index}>{part}</mark>
                    }else{
                      return <span key={index}>{part}</span>  
                    }
                })

                let partsIngre = item.ingredients.split(new RegExp(`(${query})`, 'gi'));
                let valorIngre = partsIngre.map((part, index) => {
                    if(part.toLowerCase() === query.toLowerCase()){
                        return <mark key={index}>{part}</mark>
                    }else{
                      return <span key={index}>{part}</span>  
                    }
                })

                return <Value key={index} title={valorTitle}
                                ingredients={valorIngre} thumbnail={item.thumbnail}
                                link={item.href}                         
                        />
        }
    })
}

export default fil  