// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "mar"

switch (month) { // if no break it will execute all except default
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("feb");
        break;
    case "mar":
        console.log("march");
        break;
    case "apr":
        console.log("april");
        break;
    case "may":
        console.log("may");
        break;
    case "jun":
        console.log("june");
        break;
    case "jul":
        console.log("july");
        break;
    case "aug":
        console.log("augest");
        break;
    case "sep":
        console.log("sep");
        break;
    case "oct":
        console.log("oct");
        break;
    case "nov":
        console.log("nov");
        break;
    case "dec":
        console.log("dec");
        break;

    default:
        console.log("give a month short name ");
        break;
}