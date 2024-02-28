import React  from "react";
const  Table=({items, columns,action})=>{
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                       {
                        columns.map((column)=>{
                            return (
                                <th scope="col" className="px-6 py-3">
                               {column}
                            </th>
                            )
                        })
                       }

                    </tr>
                </thead>
                <tbody>

                    {
                        items.map((item)=>{
                            return (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {item.id}
                        </th>
                        <td className="px-6 py-4">
                           {item.chef}
                        </td>
                        <td className="px-6 py-4">
                           {item.size}
                        </td>
                        <td className="px-6 py-4">
                        {item.crust}
                        </td>
                        <td className="px-6 py-4">
                        {item.toppings[0]
                        }
                        </td>
                        <td className="px-6 py-4">
                        <a href={route(action,item.id)} className="font-medium text-blue-600">Edit Information</a>
                        </td>
                    </tr>
                            )
                        })
                    }


                </tbody>
            </table>
        </div>
    )
}


export default Table;
