import Box from "@/components/Box";
import { BarLoader } from "react-spinners";


const Loading = () => {
    return ( 
        <Box className="h-full flex items-center justify-center">
            <BarLoader color="#22c55e" speedMultiplier={4}/>
        </Box>
     );
}
 
export default Loading;