import { Bar } from "react-chartjs-2";

const BarChart = () => {
    return (
        <div className="container m-4">
            <Bar 
                data={{
                    labels : ['Red', 'Green', 'Blue', 'Black', 'Yellow'],
                    datasets : [
                        {
                            label : "Chart",
                            data : [14, 15, 18, 3, 8],
                            backgroundColor : ['Red', 'Green', 'Blue', 'Black', 'Yellow']
                        }
                    ]
                }}
                height={400}
                width={600}
            />
        </div>
    )
}

export default BarChart