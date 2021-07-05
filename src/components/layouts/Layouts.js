import classes from './Layouts.module.css';
import NavigationMenu from './NavigationMenu';


function Layouts(props){
  return (
    <div>
      <NavigationMenu/>
      <main className={classes.main}>
        { props.children }
      </main>
    </div>
  );
}

export default Layouts;