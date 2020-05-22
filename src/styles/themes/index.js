import mainTheme from './main';
import lightTheme from './light';
import darkTheme from './dark';
export default {
    light:{
        ...mainTheme,
        ...lightTheme,
    },
    dark:{
        ...mainTheme,
        ...darkTheme,

    }
}