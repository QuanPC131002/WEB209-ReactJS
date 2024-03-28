import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LayoutAdmin from '../../../components/LayoutAdmin';
import { IProduct } from '../../../interfaces/Product';


const ProductList = () => {
    const queryClient = useQueryClient();
      const { data } = useQuery({
        queryKey: ['PRODUCT_KEY'],
        queryFn: async () => {
            const { data } = await axios.get('http://localhost:3000/products')
            return data;
        }
      })
        
      const {mutate} = useMutation({
        mutationFn: async (id: number | string) => {
            window.confirm('Bạn có muốn xóa?') && 
            (await axios.delete(`http://localhost:3000/products/${id}`))
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['PRODUCT_KEY']
            })
        }
      })
    return (
        <div className="grid grid-cols-[250px,1fr] gap-4">
            <LayoutAdmin />
            <div>
               <div className="flex justify-between">
               <div className="my-auto">
                        <h2 className='text-[20px] font-bold '>Quản lý sản phẩm</h2>
                </div>
                <div className="">
                        <button className='mr-4 p-2 bg-blue-500 text-white rounded my-4 hover:opacity-80'><Link to='/products/add'>Thêm mới</Link></button>
                </div>
               
               </div>
            <table className='w-full'>
                <thead>
                    <tr>
                        <td className='p-2 border-[1px] border-solid border-[#ccc]'>STT</td>
                        <th className='p-2 border-[1px] border-solid border-[#ccc]'>Image</th>
                        <th className='p-2 border-[1px] border-solid border-[#ccc]'>Name</th>
                        <th className='p-2 border-[1px] border-solid border-[#ccc]'>Desc</th>
                        <th className='p-2 border-[1px] border-solid border-[#ccc]'>Price</th>
                        <th className='p-2 border-[1px] border-solid border-[#ccc]'>Discount</th>
                        <th className='p-2 border-[1px] border-solid border-[#ccc]'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.slice(0).reverse().map((item: IProduct, index:number) => (
                        <tr key={index}>
                            <td className='p-2 border-[1px] border-solid border-[#ccc] text-center'>{index +1}</td>
                            <td className='p-2 border-[1px] border-solid border-[#ccc] text-center w-[150px]'><img src={item.image} alt="" className='rounded-[100%]'/></td>
                            <td className='p-2 border-[1px] border-solid border-[#ccc] text-center'>{item.name}</td>
                            <td className='p-2 border-[1px] border-solid border-[#ccc] text-center'>{item.description}</td>
                            <td className='p-2 border-[1px] border-solid border-[#ccc] text-center'>{item.price}</td>
                            <td className='p-2 border-[1px] border-solid border-[#ccc] text-center'>{item.discount}%</td>
                            <td className='p-2 border-[1px] border-solid border-[#ccc] text-center'>
                                <button className='w-[80px] mb-1 h-[40px] border-[1px] border-solid border-[red] bg-white text-[red] rounded hover:opacity-70' onClick={() => mutate(item.id!)}>Xóa</button>
                                <button className='w-[80px] h-[40px] bg-yellow-500 text-white rounded hover:opacity-70'><Link to={`/products/edit/${item.id}`}>Sửa</Link></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
};


export default ProductList
