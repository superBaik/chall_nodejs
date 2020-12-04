/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie";
import routes from "../src/routes"

// Add your magic here!

export const home = async(req,res)=>{
  const movies = await Movie.find({}).sort({ _id: -1 });
  
  
  res.render("movies", {movies})
}

export const movieDetail = async (req, res) => {
  const {
    params:{id}
  } = req;
  
  try {
    const movie = await Movie.findById(id);
    // console.log(movie);

    res.render("detail", { movie } )
  } catch (error) {
    res.redirect(routes.home)
  }

};




export const getAdd = (req,res)=> res.render("add")

export const postAdd = async(req,res)=> {
  const {
    body:{title,year,rating,synopsis,genres}
  }=req;
  
  const genresArr = genres.split(',')

  //save to DB 
  const newMovie = await Movie.create({
    title:title,
    year:year,
    rating:rating,
    synopsis:synopsis,
    genres:genresArr
  })

  // console.log("newMovie : " + newMovie);

  
  res.redirect(routes.detail(newMovie.id))
}

export const getEdit = async(req,res)=> {
  const{
    params:{id}
  }=req;

  try {
    const movie = await Movie.findById(id);
    res.render("editMovie",{movie});
  } catch (error) {
    res.redirect(routes.home,{movie});
  }
}

export const postEdit = async(req,res)=> {
  const {
    params:{id},
    body:{title,year,rating,synopsis,genres}
  }=req;

  try {
    await Movie.findOneAndUpdate({_id:id}, {year:year}, {title,synopsis,genres,rating})
    res.redirect(routes.detail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
}



export const deleteMovie = async(req,res)=> {
  const {
    params:{id}
  } =req;

  try {
    
    await Movie.findOneAndRemove({ _id : id })
   
  } catch (error) {
    
  }
  res.redirect(routes.home);
  

}
export const search = async(req,res)=>{
  console.log("search IN")
  
  const searchingYear = req.query.year;
  const searchingRating = req.query.rating;
  let options=[];

  const newYear = parseInt(searchingYear);
  
  
  let movies=[];
//

try {
  if(searchingYear){
    movies = await Movie.find({
      year:{ $gte: newYear}
    });
  }else{
    movies = await Movie.find({
      rating:{ $gte: searchingRating}
    })
  }
  
    } catch (error) {
  console.log(error);
  }
  res.render("search", { pageTitle: "Search",searchingYear,searchingRating, movies });

}