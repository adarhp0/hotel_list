import React,{useState,useEffect} from "react"
import Display from "./Display"
import * as d3 from "d3"
import data from './hotel_data.csv'
import Grid from '@material-ui/core/Grid';
const DataRead=()=>{
    const[hotel,setHotel]=useState([]);
    const[load,setLoad]=useState(false);
    const[fil,setFil]=useState(false);
    const[food,setFood]=useState("");
    const[nsear,setNsear]=useState("");
    const[noclue,setNoclue]=useState(1);
    useEffect(()=>  {
        d3.csv(data).then(setHotel)
        
    },[])
    useEffect(()=>{
        hotel.map(it=>{it["cost_two"]=parseInt(it["cost_two"])
            it["votes"]=parseInt(it["votes"])
            it["res_id"]=parseInt(it["res_id"])
            //it["rating"]=parseInt(it["rating"])
        }
        )
        setLoad(true)

    },[hotel])
  
    if(load===true)
{        
    var k=0;
    const root={
        paddingBottom:10,
        marginLeft:"auto",
        width:"80%"
    }
    const in_style={
        height:35,
        width:"100%",
        marginLeft:"0%",
        
    
    }
        
        return(


        <div key="new">
                <input placeholder=" Search by Name"
                style={in_style} value={nsear} onChange={e=>{setFil(false);setNsear(e.target.value)}}/>
                <br></br>
            <br></br>
            
        <Grid container style={root} spacing={0}>
            <Grid item xs={3}>
            <button 
                onClick={e=>{
                    setNoclue(3)
                setHotel(hotel.sort(function(x, y){
                    return d3.ascending(x.cost_two, y.cost_two);
                 }))}}
                >Cost</button>
            </Grid>
            <Grid item xs={3}>
            <button 
                onClick={e=>{
                    setNoclue(2)
                setHotel(hotel.sort(function(x, y){
                    return d3.ascending(x.votes, y.votes);
                 }))}}
                >Votes</button>
            </Grid>
            <Grid item xs={3}>
            <button 
                onClick={e=>{
                    setNoclue(4)
                setHotel(hotel.sort(function(x, y){
                    return d3.ascending(x.rating, y.rating);
                 }))}}
                >Ratings</button>
            </Grid>
        </Grid>
            
<div style={{textAlign:"center"}}>
        <select  onChange={e=>{setFood(e.target.value);setFil(true);setNsear("")}}>
            <option value="">Filter by Cuisine</option>
            <option value="French">French</option><option value="Japanese">Japanese</option><option value="Desserts">Desserts</option><option value="Seafood">Seafood</option><option value="Asian">Asian</option><option value="Filipino">Filipino</option><option value="Indian">Indian</option><option value="Sushi">Sushi</option><option value="Korean">Korean</option><option value="Chinese">Chinese</option><option value="European">European</option><option value="Mexican">Mexican</option><option value="Ice Cream">Ice Cream</option><option value="Cafe">Cafe</option><option value="American">American</option><option value="Italian">Italian</option><option value="Pizza">Pizza</option><option value="Mediterranean">Mediterranean</option><option value="Fast Food">Fast Food</option><option value="Bakery">Bakery</option><option value="Brazilian">Brazilian</option><option value="Arabian">Arabian</option><option value="Bar Food">Bar Food</option><option value="Grill">Grill</option><option value="International">International</option><option value="Peruvian">Peruvian</option><option value="Latin American">Latin American</option><option value="Burger">Burger</option><option value="Healthy Food">Healthy Food</option><option value="Beverages">Beverages</option><option value="Lebanese">Lebanese</option><option value="Juices">Juices</option><option value="Sandwich">Sandwich</option><option value="Steak">Steak</option><option value="BBQ">BBQ</option><option value="Gourmet Fast Food">Gourmet Fast Food</option><option value="Mineira">Mineira</option><option value="North Eastern">North Eastern</option><option value="Coffee and Tea">Coffee and Tea</option><option value="Vegetarian">Vegetarian</option><option value="Tapas">Tapas</option>
        </select>
        </div>
       <br></br>
       <br></br>
        {hotel.map((item)=><div key={k++}>
           
           {
               fil===false?
                (nsear.length===0?
               <Display ob={item}/>:item["res_name"].includes(nsear)?<Display ob={item}/>:console.log("")):
               item["cuisines"].includes(food)?<Display ob={item}/>:console.log("")             
           }
        </div>
            )}
          Set
        </div>
    )}
    else{
        return(
            <div>Loading</div>
        )
    }
}

export default DataRead;
