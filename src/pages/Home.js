import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  onSnapshot,
  query,
  orderBy,
  where,
  startAfter,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import BlogSection from "../components/BlogSection";
import Spinner from "../components/Spinner";
import { db } from "../firebase";
import { toast } from "react-toastify";
import Tags from "../components/Tags";
import FeatureBlogs from "../components/FeatureBlogs";
import Trending from "../components/Trending";
import Search from "../components/Search";
import { isEmpty, isNull } from "lodash";
import { useLocation } from "react-router-dom";
import Category from "../components/Category";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

export default Home