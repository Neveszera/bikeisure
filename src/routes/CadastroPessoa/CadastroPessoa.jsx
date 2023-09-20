import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import './CadastroPessoa.css';

const CadastroPessoa = () => {
  const schema = Yup.object().shape({
    nome: Yup.string().required('Campo obrigatório'),
    cpf: Yup.string()
      .required('Campo obrigatório')
      .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido'),
    dataNascimento: Yup.date()
      .required('Campo obrigatório')
      .max(new Date(), 'Data de nascimento inválida'),
    telefone: Yup.string()
      .required('Campo obrigatório')
      .matches(/^\(\d{2}\) \d{5}-\d{4}$/, 'Telefone inválido'),
    email: Yup.string().required('Campo obrigatório').email('Email inválido'),
    senha: Yup.string().required('Campo obrigatório'),
    confirmarSenha: Yup.string()
      .required('Campo obrigatório')
      .oneOf([Yup.ref('senha'), null], 'Senhas devem coincidir'),
    concordarTermos: Yup.boolean().oneOf([true], 'Você deve concordar com os termos e condições'),
  });

  const formik = useFormik({
    initialValues: {
      nome: '',
      cpf: '',
      dataNascimento: '',
      telefone: '',
      email: '',
      senha: '',
      confirmarSenha: '',
      concordarTermos: false,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      // Aqui vamos enviar os dados para o servidor.
      // mas por enquanto, apenas mostraremos os dados no console.
      console.log('Dados enviados:', values);
    },
  });

  return (
    <div className="cadastro-container">
      <div className="left-column">
        <div className="d-shape">
          <div className="text-content">
            <h1>Bikeisure</h1>
            <h3>Etapa 1 - 4</h3>
            <p>Preencha o formulário com seus dados pessoais para criar uma conta.</p>
          </div>
        </div>
      </div>
      <div className="right-column">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome Completo</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formik.values.nome}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              placeholder="Seu Nome Completo"
            />
            {formik.touched.nome && formik.errors.nome ? (
              <div className="error-message">{formik.errors.nome}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="cpf">CPF</label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              value={formik.values.cpf}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              placeholder="Seu CPF (123.456.789-01)"
            />
            {formik.touched.cpf && formik.errors.cpf ? (
              <div className="error-message">{formik.errors.cpf}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="dataNascimento">Data de Nascimento</label>
            <input
              type="text"
              id="dataNascimento"
              name="dataNascimento"
              value={formik.values.dataNascimento}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              placeholder="Sua Data de Nascimento (DD/MM/AAAA)"
            />
            {formik.touched.dataNascimento && formik.errors.dataNascimento ? (
              <div className="error-message">{formik.errors.dataNascimento}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="telefone">Telefone</label>
            <input
              type="text"
              id="telefone"
              name="telefone"
              value={formik.values.telefone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              placeholder="Seu Telefone (99) 99999-9999"
            />
            {formik.touched.telefone && formik.errors.telefone ? (
              <div className="error-message">{formik.errors.telefone}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              placeholder="Seu Email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error-message">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={formik.values.senha}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              placeholder="Sua Senha"
            />
            {formik.touched.senha && formik.errors.senha ? (
              <div className="error-message">{formik.errors.senha}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              value={formik.values.confirmarSenha}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              placeholder="Confirme Sua Senha"
            />
            {formik.touched.confirmarSenha && formik.errors.confirmarSenha ? (
              <div className="error-message">{formik.errors.confirmarSenha}</div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="concordarTermos">
              <input
                type="checkbox"
                id="concordarTermos"
                name="concordarTermos"
                checked={formik.values.concordarTermos}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />{''}
              Concordo com os termos e condições
            </label>
            {formik.touched.concordarTermos && formik.errors.concordarTermos ? (
              <div className="error-message">{formik.errors.concordarTermos}</div>
            ) : null}
          </div>
          <Link to="/cadastro/cadastrobike">
            <button type="submit">Próxima Etapa</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CadastroPessoa;
