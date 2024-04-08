import "./App.css"
import Header from './Components/Common/Heading/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min'
import Home from "./Components/Home/Hero/Home"
import About from "./Components/About/About"
import CoursesHome from "./Components/AllCourses/CoursesHome"
import Team from "./Components/Team/Team"
import Price from "./Components/Pricing/Price"
import Blog from "./Components/Blog/Blog"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"

const App = () => {
  return (
    <div>
      
      <Router>
      <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/courses' exact component={CoursesHome} />
          <Route path='/team' exact component={Team} />
          <Route path='/pricing' exact component={Price} />
          <Route path='/journal' exact component={Blog} />
          <Route path='/contact' exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App