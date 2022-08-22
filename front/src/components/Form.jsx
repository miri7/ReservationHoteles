import React, { useState } from 'react'
import { useFormik } from 'formik';
import {  Col, Form, Row} from 'react-bootstrap';

const Formularios = () => {
  console.log('');
  const [dataActividad, setDataActividad] = useState({})
  const formik = useFormik({
		enableReinitialize: true,
		initialValues: dataActividad,
		onSubmit: () => {
			console.log(formik.values);
		},
	});
  return (
    <>
      <Form
						className='forms-sm'
					>
						<Row>
							<Col xs={12} md={12} lg={4}>
								<fieldset className='mb-3'>
									<legend>Datos de la solicitud</legend>
									<Row className='g-3'>
										<Col xs={12} sm={12} md={6} lg={6}>
											<Form.Label>N° Solicitud</Form.Label>
										
										</Col>
										<Col xs={12} sm={12} md={6} lg={6}>
											<Form.Label>Año</Form.Label>
										
										</Col>
									</Row>
								</fieldset>
							</Col>
							<Col xs={12} md={12} lg={8}>
								<fieldset className='mb-3'>
									<Row className='g-3'>
										<Col xs='auto'>
											<Form.Check
												type='text'
												size='sm'
												name='tipoCuc'
												id='tipoCucIcl'
												label='Código catastral – ICL'
												className='fw-bold'
												// value={CODIGO_REFERENCIAL_CATASTRAL_ICL}
												onChange={formik.handleChange}
												
											/>
										</Col>
										
									</Row>
									
								</fieldset>
							</Col>
						</Row>
						
					</Form>
    </>
  )
}

export default Formularios
