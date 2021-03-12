import React,{useState,useEffect} from 'react'
import {Typography,TextField, Select ,MenuItem, FormControl,InputLabel} from "@material-ui/core"
import axios from 'axios'

export default function Main(props) {
    const [from,setFrom] = useState("INR");
    const [to,setTo] = useState("USD");

    useEffect(() => {
        axios.get(`https://api.exchangerate-api.com/v4/latest/${from}`).then(res=>console.log(res.data.rates[to]))
    }, [])

    const onChangeHandler =(event)=>{
        setFrom(event.target.value)
        valueChange({"call":"from"},event.target.value)
    }
    const onChangeHandler2 =(event)=>{
        setTo(event.target.value)
        valueChange({"call":"to"},event.target.value)
    }

    const valueChange = (obj,event)=>{
        const fromField = document.getElementById("from_field").value
        const toField = document.getElementById("to_field")
        if(obj.call === "from"){
            axios.get(`https://api.exchangerate-api.com/v4/latest/${event}`).then(res=>toField.value = (parseFloat(res.data.rates[to])* parseFloat(fromField)))
        }
        else{
            axios.get(`https://api.exchangerate-api.com/v4/latest/${from}`).then(res=>toField.value = (parseFloat(res.data.rates[event])* parseFloat(fromField)))
        }
        
    }
    const currencyChange = (event)=>{
        console.log("enjoy")
        const fromField = document.getElementById("from_field").value
        const toField = document.getElementById("to_field")
        const eur = document.getElementById("eur")
        axios.get(`https://api.exchangerate-api.com/v4/latest/${from}`)
        .then(res=>{
            
            document.getElementById("eur").value = parseFloat(res.data.rates["EUR"]*parseFloat(fromField))
            document.getElementById("usd").value = parseFloat(res.data.rates["USD"]*parseFloat(fromField))
            document.getElementById("inr").value = parseFloat(res.data.rates["INR"]*parseFloat(fromField))
            document.getElementById("aud").value = parseFloat(res.data.rates["AUD"]*parseFloat(fromField))
            document.getElementById("chf").value = parseFloat(res.data.rates["CHF"]*parseFloat(fromField))
            document.getElementById("cdf").value = parseFloat(res.data.rates["CDF"]*parseFloat(fromField))
            document.getElementById("jpy").value = parseFloat(res.data.rates["JPY"]*parseFloat(fromField))
            document.getElementById("cny").value = parseFloat(res.data.rates["CNY"]*parseFloat(fromField))
            toField.value = (parseFloat(res.data.rates[to])* parseFloat(fromField))})
    }
    return (
        <div className="home-container">
    <Typography className="curr_convert" variant="h4">
      Welcome to currency Converter!
    </Typography>
    <div class="holder">
    <TextField id="from_field" onChange={(event)=>currencyChange(event)} style={{width:"400px"}} label="value"></TextField>
        <FormControl>
        <Select 
        id="from"
        value={from}
        onChange={onChangeHandler}>
            <MenuItem value="AED">AED</MenuItem>
            <MenuItem value="ARS">ARS</MenuItem>
            <MenuItem value="AUD">AUD</MenuItem>
            <MenuItem value="BGN">BGN</MenuItem>
            <MenuItem value="BRL">BRL</MenuItem>
            <MenuItem value="BSD">BSD</MenuItem>
            <MenuItem value="CAD">CAD</MenuItem>
            <MenuItem value="CHF">CHF</MenuItem>
            <MenuItem value="CLP">CLP</MenuItem>
            <MenuItem value="CNY">CNY</MenuItem>
            <MenuItem value="COP">COP</MenuItem>
            <MenuItem value="CZK">CZK</MenuItem>
            <MenuItem value="DKK">DKK</MenuItem>
            <MenuItem value="DOP">DOP</MenuItem>
            <MenuItem value="EGP">EGP</MenuItem>
            <MenuItem value="EUR">EUR</MenuItem>
            <MenuItem value="FJD">FJD</MenuItem>
            <MenuItem value="GBP">GBP</MenuItem>
            <MenuItem value="GTQ">GTQ</MenuItem>
            <MenuItem value="HKD">HKD</MenuItem>
            <MenuItem value="HRK">HRK</MenuItem>
            <MenuItem value="HUF">HUF</MenuItem>
            <MenuItem value="IDR">IDR</MenuItem>
            <MenuItem value="ILS">ILS</MenuItem>
            <MenuItem value="INR">INR</MenuItem>
            <MenuItem value="ISK">ISK</MenuItem>
            <MenuItem value="JPY">JPY</MenuItem>
            <MenuItem value="KRW">KRW</MenuItem>
            <MenuItem value="KZT">KZT</MenuItem>
            <MenuItem value="MXN">MXN</MenuItem>
            <MenuItem value="MYR">MYR</MenuItem>
            <MenuItem value="NOK">NOK</MenuItem>
            <MenuItem value="NZD">NZD</MenuItem>
            <MenuItem value="PAB">PAB</MenuItem>
            <MenuItem value="PEN">PEN</MenuItem>
            <MenuItem value="PHP">PHP</MenuItem>
            <MenuItem value="PKR">PKR</MenuItem>
            <MenuItem value="PLN">PLN</MenuItem>
            <MenuItem value="PYG">PYG</MenuItem>
            <MenuItem value="RON">RON</MenuItem>
            <MenuItem value="RUB">RUB</MenuItem>
            <MenuItem value="SAR">SAR</MenuItem>
            <MenuItem value="SEK">SEK</MenuItem>
            <MenuItem value="SGD">SGD</MenuItem>
            <MenuItem value="THB">THB</MenuItem>
            <MenuItem value="TRY">TRY</MenuItem>
            <MenuItem value="TWD">TWD</MenuItem>
            <MenuItem value="UAH">UAH</MenuItem>
            <MenuItem value="USD" selected>USD</MenuItem>
            <MenuItem value="UYU">UYU</MenuItem>
            <MenuItem value="VND">VND</MenuItem>
            <MenuItem value="ZAR">ZAR</MenuItem>
        </Select>
        </FormControl>
        </div>
        <div class="holder">
    <TextField id="to_field" onChange={(event)=>currencyChange(event)} style={{width:"400px"}} ></TextField>
        <FormControl>
        <Select 
        id="to"
        value={to}
        onChange={onChangeHandler2}>
            <MenuItem value="AED">AED</MenuItem>
            <MenuItem value="ARS">ARS</MenuItem>
            <MenuItem value="AUD">AUD</MenuItem>
            <MenuItem value="BGN">BGN</MenuItem>
            <MenuItem value="BRL">BRL</MenuItem>
            <MenuItem value="BSD">BSD</MenuItem>
            <MenuItem value="CAD">CAD</MenuItem>
            <MenuItem value="CHF">CHF</MenuItem>
            <MenuItem value="CLP">CLP</MenuItem>
            <MenuItem value="CNY">CNY</MenuItem>
            <MenuItem value="COP">COP</MenuItem>
            <MenuItem value="CZK">CZK</MenuItem>
            <MenuItem value="DKK">DKK</MenuItem>
            <MenuItem value="DOP">DOP</MenuItem>
            <MenuItem value="EGP">EGP</MenuItem>
            <MenuItem value="EUR">EUR</MenuItem>
            <MenuItem value="FJD">FJD</MenuItem>
            <MenuItem value="GBP">GBP</MenuItem>
            <MenuItem value="GTQ">GTQ</MenuItem>
            <MenuItem value="HKD">HKD</MenuItem>
            <MenuItem value="HRK">HRK</MenuItem>
            <MenuItem value="HUF">HUF</MenuItem>
            <MenuItem value="IDR">IDR</MenuItem>
            <MenuItem value="ILS">ILS</MenuItem>
            <MenuItem value="INR">INR</MenuItem>
            <MenuItem value="ISK">ISK</MenuItem>
            <MenuItem value="JPY">JPY</MenuItem>
            <MenuItem value="KRW">KRW</MenuItem>
            <MenuItem value="KZT">KZT</MenuItem>
            <MenuItem value="MXN">MXN</MenuItem>
            <MenuItem value="MYR">MYR</MenuItem>
            <MenuItem value="NOK">NOK</MenuItem>
            <MenuItem value="NZD">NZD</MenuItem>
            <MenuItem value="PAB">PAB</MenuItem>
            <MenuItem value="PEN">PEN</MenuItem>
            <MenuItem value="PHP">PHP</MenuItem>
            <MenuItem value="PKR">PKR</MenuItem>
            <MenuItem value="PLN">PLN</MenuItem>
            <MenuItem value="PYG">PYG</MenuItem>
            <MenuItem value="RON">RON</MenuItem>
            <MenuItem value="RUB">RUB</MenuItem>
            <MenuItem value="SAR">SAR</MenuItem>
            <MenuItem value="SEK">SEK</MenuItem>
            <MenuItem value="SGD">SGD</MenuItem>
            <MenuItem value="THB">THB</MenuItem>
            <MenuItem value="TRY">TRY</MenuItem>
            <MenuItem value="TWD">TWD</MenuItem>
            <MenuItem value="UAH">UAH</MenuItem>
            <MenuItem value="USD" selected>USD</MenuItem>
            <MenuItem value="UYU">UYU</MenuItem>
            <MenuItem value="VND">VND</MenuItem>
            <MenuItem value="ZAR">ZAR</MenuItem>
        </Select>
        </FormControl>
        </div>
        <div className="all_curr_box">
            <div className="multi_curr_holder">
            <div className="one_curr_holder">
                <Typography variant="h4">EUR</Typography>
                <TextField id ='eur'></TextField>
            </div>
            <div className="one_curr_holder">
                <Typography variant="h4">USD</Typography>
                <TextField id ='usd' ></TextField>
            </div>
            <div className="one_curr_holder">
                <Typography variant="h4">INR</Typography>
                <TextField id ='inr' ></TextField>
            </div>
            <div className="one_curr_holder">
                <Typography variant="h4">AUD</Typography>
                <TextField id ='aud' ></TextField>
            </div>
            </div>
            <div className="multi_curr_holder">
            <div className="one_curr_holder">
                <Typography variant="h4">CHF</Typography>
                <TextField id ='chf' ></TextField>
            </div>
            <div className="one_curr_holder">
                <Typography variant="h4">CDF</Typography>
                <TextField id ='cdf' ></TextField>
            </div>
            <div className="one_curr_holder">
                <Typography variant="h4">JPY</Typography>
                <TextField id ='jpy' ></TextField>
            </div>
            <div className="one_curr_holder">
                <Typography variant="h4">CNY</Typography>
                <TextField id ='cny' ></TextField>
            </div>
            </div>            
        </div>
    </div>
    
    )
}
