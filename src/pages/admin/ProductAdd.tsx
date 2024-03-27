import { joiResolver } from '@hookform/resolvers/joi'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import Joi from 'joi'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { IProduct } from '../../interfaces/Product'
import LayoutAdmin from '../../components/LayoutAdmin'





const productSchema = Joi.object({
  name: Joi.string().required().min(3),
  price: Joi.number().required().min(0),
  description: Joi.string().required().min(6),
  image: Joi.string().optional(),
  discount: Joi.number().min(0).optional()
})
const ProductAdd = () => {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IProduct>({
    resolver: joiResolver(productSchema),
    defaultValues: {
      name: '',
      price: 0,
      image: '',
      discount: 0,
      description: ''
    }
  })

  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: async (product: IProduct) => {
      return await axios.post(`http://localhost:3000/products`, product)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['PRODUCT_KEY']
      })
      navigate('/admin')
    }
  })
 
  const onSubmit: SubmitHandler<IProduct> = (product) => {
    mutate(product);
  }
  return (
   <div className="grid grid-cols-[250px,1fr] gap-4">
      <LayoutAdmin />
      <div className='p-2 mt-5'>
      <h1 className='text-2xl text-[blue] text-center font-bold'>Thêm Sản Phẩm</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-4">
          <label htmlFor="" className='block text-[blue]'>Name</label>
          <input className='w-[95%] pl-2 h-[50px] border-[1px] border-solid border-[#ccc]' type="text" {...register('name', {required: true, minLength: 3})} />
          {errors?.name?.message && <p className='text-[red]'>{errors?.name.message}</p>}
        </div>
       
        <div className="my-4">
          <label htmlFor="" className='block text-[blue]'>Image</label>
          <input className='w-[95%] pl-2 h-[50px] border-[1px] border-solid border-[#ccc]' type="text" {...register('image', {required: true})} />
          {errors?.image?.message && <p className='text-[red]'>{errors?.image.message}</p>}
        </div>
        <div className="my-4">
          <label htmlFor="" className='block text-[blue]'>Price</label>
          <input className='w-[95%] pl-2 h-[50px] border-[1px] border-solid border-[#ccc]' type="number" {...register('price', {required: true})} />
          {errors?.price?.message && <p className='text-[red]'>{errors?.price.message}</p>}
        </div>
        <div className="my-4">
          <label htmlFor="" className='block text-[blue]'>Discount</label>
          <input className='w-[95%] pl-2 h-[50px] border-[1px] border-solid border-[#ccc]' type="number" {...register('discount', {required: true})} />
          {errors?.discount?.message && <p className='text-[red]'>{errors?.discount.message}</p>}
        </div>
        <div className="my-4">
          <label htmlFor="" className='block text-[blue]'>Desc</label>
          <input className='w-[95%] pl-2 h-[50px] border-[1px] border-solid border-[#ccc]' type="text" {...register('description', {required: true})} />
          {errors?.description?.message && <p className='text-[red]'>{errors?.description.message}</p>}
        </div>
          <button type='submit' className='p-2 bg-blue-500 text-white rounded my-4 hover:opacity-80'>{isPending ? "Đang thêm" : "Thêm mới"}</button>
      </form>
    </div>
   </div>
  )
}

export default ProductAdd
