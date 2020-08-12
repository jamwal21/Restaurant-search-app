import React, { useState } from 'react'
import { Text,ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    const [term,setTerm] = useState('');
    const [searchApi,results,errorMessage] = useResults();
    
    const filterResultsByPrice = (price) =>{
        return results.filter(result =>{
            return result.price === price;
        })
    }

    return (
        <>
            <SearchBar 
            term={term}
            onTermChange={(newTerm) => setTerm(newTerm)}
            onTermSubmit={() => {
                searchApi(term)
                setTerm('')
            } } />
           {
               errorMessage? <Text style={{color:'red',marginHorizontal:15,fontSize:30}}>{errorMessage}</Text> : null
           }
           <ScrollView>
            <ResultsList
                title='Cost Effective'
                results={filterResultsByPrice('$')} />
            <ResultsList 
                title='Bit Pricier'
                results={filterResultsByPrice('$$')} />
            <ResultsList
                title='Big Spender'
                results={filterResultsByPrice('$$$')} />
           </ScrollView>
        </>
    )
}

SearchScreen.navigationOptions = ()=>{
    return{
        headerTitle:'Food Search'
    }
}


export default SearchScreen
