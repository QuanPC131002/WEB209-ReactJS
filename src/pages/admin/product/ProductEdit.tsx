import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { IProduct } from '../../../interfaces/Product'
import LayoutAdmin from '../../../components/LayoutAdmin'



const ProductEdit = () => {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IProduct>({
    defaultValues: {
      name: '',
      price: 0,
      image: '',
      discount: 0,
      description: ''
    }
  })

  useQuery({
    queryKey: ['PRODUCT_KEY', id],
    queryFn: async() => {
      const { data } = await axios.get(`http://localhost:3000/products/${id}`)
      reset(data);
      return data;
    }
  })
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async (product: IProduct) => {
      return await axios.put(`http://localhost:3000/products/${product.id}`, product)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['PRODUCT_KEY']
    })
    navigate('/admin')

    }
  })
  
  const onSubmit: SubmitHandler<IProduct> = (product: IProduct) => {
    mutate(product);
  }
  return (
    <div className="grid grid-cols-[250px,1fr] gap-4">
      <LayoutAdmin />
      <div className='p-2 mt-5'>
      <h1 className='text-2xl text-[blue] text-center font-bold'>Cập Nhật Sản Phẩm</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-4">
          <label htmlFor="" className='block text-[blue]'>Name</label>
          <input className='w-[95%] pl-2 h-[50px] border-[1px] border-solid border-[#ccc]' type="text" {...register('name', {required: true, minLength: 3})} />
          {errors?.name && <p className='text-[red]'>Tên trống !</p>}
        </div>
       
        <div className="my-4">
          <label htmlFor="" className='block text-[blue]'>Image</label>
          <input className='w-[95%] pl-2 h-[50px] border-[1px] border-solid border-[#ccc]' type="text" {...register('image', {required: true})} />
          {errors?.image && <p className='text-[red]'>Ảnh trống !</p>}
        </div>
        <div className="my-4">
          <label htmlFor="" className='block text-[blue]'>Price</label>
          <input className='w-[95%] pl-2 h-[50px] border-[1px] border-solid border-[#ccc]' type="number" {...register('price', {required: true, min: 0})} />
          {errors?.price && <p className='text-[red]'>Giá trống !</p>}
        </div>
        <div className="my-4">
          <label htmlFor="" className='block text-[blue]'>Discount</label>
          <input className='w-[95%] pl-2 h-[50px] border-[1px] border-solid border-[#ccc]' type="number" {...register('discount', {required: true, min: 0})} />
          {errors?.discount && <p className='text-[red]'>Discount trống !</p>}
        </div>
        <div className="my-4">
          <label htmlFor="" className='block text-[blue]'>Desc</label>
          <textarea className='w-[95%] pl-2  border-[1px] border-solid border-[#ccc]' rows={10} {...register('description', {required: true})} />
          {errors?.description && <p className='text-[red]'>Mô tả trống !</p>}
        </div>
          <button className='p-2 bg-blue-500 text-white rounded my-4 hover:opacity-80'>{isPending ? "Đang cập nhật" : "Cập nhật"}</button>
      </form>
    </div>
    </div>
  )
}

export default ProductEdit
