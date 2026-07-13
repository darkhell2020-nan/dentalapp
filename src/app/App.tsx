import { Route,Routes } from 'react-router-dom';import { Home } from '../pages/Home';import { TopicDetail,NotFound } from '../pages/TopicDetail';
export function App(){return <Routes><Route path="/" element={<Home/>}/><Route path="/topics/:slug" element={<TopicDetail/>}/><Route path="*" element={<NotFound/>}/></Routes>}
