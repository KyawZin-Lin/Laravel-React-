import Table from '@/Components/Table'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
export default function All({ auth, pizzas }) {

    const columns=[
        'Id',
        'Chef',
        'Size',
        'Crust',
        'Toppings',
        'Action'
    ]
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    All Pizzas
                </h2>
            }
        >
            <Head title="All Pizzas" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        {/* <div className="p-6 text-gray-900 dark:text-gray-100">
                            You're logged in now!
                        </div> */}

                        <Table items={pizzas} columns={columns} action="pizzas.edit"/>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
