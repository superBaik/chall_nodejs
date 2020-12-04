

const HOME ='/';
const MOVIEDETAIL = '/:id';
const FILTER = '/filter';
const ADD = "/add"
const EDITMOVIE ="/:id/edit"
const DELETEMOVIE ="/:id/delete"
const SEARCH ="/search"

const routes = {
  home : HOME,
  detail : (id)=>{
    if(id){
      return `/${id}`;
    }else{
      return MOVIEDETAIL;
    }
  },
  add : ADD,
  editMovie:(id)=>{
    if(id){
      return `/${id}/edit`;
    }else{
      return EDITMOVIE;
    }
  },
  deleteMovie:(id)=>{
    if(id){
      return `/${id}/delete`
    }else{
      return DELETEMOVIE
    }
  },
  search : SEARCH
}

export default routes;

