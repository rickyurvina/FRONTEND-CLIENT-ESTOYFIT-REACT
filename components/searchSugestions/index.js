import Autosuggest from 'react-autosuggest';
import React, { Component } from 'react';
import { getGymBranchsByFilter } from '../../services/gymService.js';
import { getSuggestionTags } from '../../services/suggestionTagService.js';
import Link from "next/link";
import styled from 'styled-components';
const data = [
    {
        name: 'Crossfit',
        categories: [0, 3, 5],
    },
    {
        name: 'Cardio',
        categories: [3, 5],
    },
    {
        name: 'Quito',
        categories: [0, 2, 4],
    },
    {
        name: 'Guayaquil',
        categories: [2, 4],
    },
    {
        name: 'La florida',
        categories: [1],
    },
    {
        name: 'Trx',
        categories: [3, 5],
    },
    {
        name: 'Aeróbicas',
        categories: [3, 5],
    },
    {
        name: 'Estoy fit Loja',
        categories: [0],
    },
    {
        name: 'Knockout',
        categories: [0],
    },
    {
        name: 'Loja',
        categories: [2, 4],
    },
    {
        name: 'Cuenca',
        categories: [2, 4],
    },
    {
        name: 'Quito norte',
        categories: [1],
    },
    {
        name: 'Reino de quito',
        categories: [1],
    },
    {
        name: 'Quito sur',
        categories: [1],
    },
    {
        name: 'Quito tennis',
        categories: [1],
    },
    {
        name: 'Oriente quiteño',
        categories: [1],
    },
    {
        name: 'Quitumbe',
        categories: [1],
    },
];

class 
SearchSugestion extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            suggestions: [],
            data: [],
            categories: [
                {
                    'id': '1',
                    'cat': 'Establecimientos',
                    'message': '',
                    'suggestionWords': [],
                    'words': []
                },
                {
                    'id': '2',
                    'cat': 'Barrios',
                    'message': 'Gimnasios en',
                    'suggestionWords': [],
                    'words': []
                },
                {
                    'id': '3',
                    'cat': 'Ciudades',
                    'message': 'Gimnasios en',
                    'suggestionWords': [],
                    'words': []
                },
                {
                    'id': '4',
                    'cat': 'Clases en ciudad',
                    'message': 'Clases de',
                    'suggestionWords': ['Quito', 'Loja', 'Guayaquil', 'Cuenca'],
                    'words': []
                },
                {
                    'id': '5',
                    'cat': 'Promociones',
                    'message': 'Promociones en',
                    'suggestionWords': [],
                    'words': []
                },
                {
                    'id': '6',
                    'cat': 'Promociones',
                    'message': 'Promociones de',
                    'suggestionWords': [],
                    'words': []
                },

            ]
        };
    }

    componentDidMount(){
        this.getSuggestionTags();
    }

    getSuggestionTags = async () => {
        const response = await getSuggestionTags();
        const { data:{ data = []} = []} = response;
        console.log('RESPONSE IN TAGS=> ', data)
        this.setState({ data });
    }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        console.log('FIRST D ')
        let categoriesSearch = [];
        const suggestions = this.getSuggestions(value, categoriesSearch);
        console.log('RETURNED SUGESTIONS ', suggestions)
        this.setState({
            suggestions
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    getSuggestions = (value, categoriesSearch) => {
        const { data } = this.state;
        console.log('SECOND D ', this.state.categories, categoriesSearch)
        categoriesSearch = this.state.categories;
        console.log('SEARCH ', categoriesSearch, this.state.categories)

        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        const filteredData = inputLength === 0 ? [] : data.filter(d => {
            const index = d.name.toLowerCase().indexOf(inputValue)
            return index != -1
        }
            // d.name.toLowerCase().slice(0, inputLength) === inputValue

        );

        console.log('FILTERED DATA', filteredData)
        categoriesSearch.map((c, i) => { categoriesSearch[i].words = [] });

        categoriesSearch.map((c, i) => {
            let f = filteredData.map((fd) => {
                let fdCategories = JSON.parse(fd.categories); 
                let n = fdCategories.indexOf(i)

                if (n != -1) {

                    categoriesSearch[i].words.push(fd)
                }
            })
        });

        console.log('FILTERED => ', categoriesSearch)

        return categoriesSearch;
    };

    getSuggestionValue = (suggestion) => {
        console.log('SUGESTION ', suggestion)
        return ''
    };

    searchSugestion = async (e, suggestion, w, sw = null) => {
        e.preventDefault();
        console.log('HA HECHO CLICK FYCK ', suggestion, w, sw)
        const response = await getGymBranchsByFilter(suggestion, w, sw);
        console.log('RESPONSE IN => ', response)
    }

    renderSuggestion = suggestion => (
        <>
            {suggestion.words.length > 0 && (
                <>
                    {suggestion.cat}
                    {suggestion.words.map((w) => {
                        const message = suggestion.message.replace(" ", "-");
                        const textA = w.name.replace(" ", "-");

                        if (suggestion.cat == 'Clases en ciudad') {

                            return (<ul>
                                {suggestion.suggestionWords.map((sw) => {
                                    console.log('SW ', sw)
                                    const textB = sw.replace(" ", "-");

                                    return (<li>
                                        <Link

                                            prefetch href={{ pathname: '/search', query: { key: `${suggestion.id}`, suggestion: `${suggestion.message}`, search: `${w.name}`, nearIn: `${sw}` } }} as={`/search/${message}/${textA}/${textB}`}
                                        >
                                            <a>
                                                <span style={{ font: 'small-caption' }}> {suggestion.message} {w.name} en {sw} </span>
                                            </a>
                                        </Link>

                                    </li>)

                                })}
                            </ul>)
                        } else {
                            return (<ul>

                                <Link href={{ pathname: '/search', query: { key: `${suggestion.id}`, suggestion: `${suggestion.message}`, search: `${w.name}` } }} as={`/search/${message}/${textA}`} ><a><span style={{ font: 'small-caption' }}> {suggestion.message} {w.name} </span></a></Link>
                            </ul>)
                        }
                    })}
                </>
            )}
        </>
    );

    render() {
        const { value, suggestions } = this.state;

        const inputProps = {
            placeholder: 'Busca Tu Actividad Deportiva / Establecimiento',
            value,
            onChange: this.onChange,
        };
        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}


export default SearchSugestion;

