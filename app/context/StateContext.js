import React, { useState, useEffect, createContext } from "react";
import { authentication, database } from "../../Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDoc, doc, onSnapshot, query } from "firebase/firestore";
export const StateContext = createContext();

export const StateProvider = (props) => {
  const [user, setUser] = useState();
  const [cartTotal, setCartTotal] = useState();
  const [oldPriceCartTotal, setOldPriceCartTotal] = useState();
  const [cartSave, setCartSave] = useState();
  const [wishTotal, setWishTotal] = useState();
  const [wishSave, setWishSave] = useState();
  const [orderTotal, setOrderTotal] = useState();
  const [orderSave, setOrderSave] = useState();
  const [dataMens, setDataMens] = useState([]);
  const [dataWomens, setDataWomens] = useState([]);
  const [dataMobile, setDataMobile] = useState([]);
  const [dataCart, setDataCart] = useState([]);
  const [dataWishlist, setDataWishlist] = useState([]);
  const [add, setAdd] = useState([]);
  const [dataOrder, setDataOrder] = useState([]);

  useEffect(() => {
    onAuthStateChanged(authentication, (usr) => {
      if (usr != null) setUser(usr.uid);
      else setUser(null);
    });

    //Mens Data Fetching

    // const getMensDataFromFirebase = async ()=>{
    // const ref = doc(collection(database,'collection','mens','lists'))
    // const snap = await getDocs(ref)
    // console.log(snap)
    // }
    // getMensDataFromFirebase()

    // onSnapshot((querySnapshot) => {
    //    // querySnapshot.forEach((doc) => {
    //    //    getMensDataFromFirebase.push({ ...doc.data(), key: doc.id });
    //    // });
    //    onSnapshot(snap,doc=>{
    //       getMensDataFromFirebase.push({ ...doc.data(), key: doc.id });
    //    })
    //    setDataMens(getMensDataFromFirebase);
    // });
    const getMensDataFromFirebase = [];
    onSnapshot(
      collection(database, "collection", "mens", "lists"),
      (snapshot) => {
        // console.log(snapshot.docs.map((doc) => doc.data()));
        snapshot.docs.map((doc) => {
          getMensDataFromFirebase.push({ ...doc.data(), key: doc.id });
        });
        setDataMens(getMensDataFromFirebase);
      }
    );
    //  Womens Data Fetching
    const getWomenDataFromFirebase = [];
    onSnapshot(
      collection(database, "collection", "womens", "lists"),
      (snapshot) => {
        //console.log(snapshot.docs.map((doc) => doc.data()));
        snapshot.docs.map((doc) => {
          getWomenDataFromFirebase.push({ ...doc.data(), key: doc.id });
        });
        setDataWomens(getWomenDataFromFirebase);
      }
    );
    //  database
    //    .collection("collection")
    //    .doc("womens")
    //    .collection("lists")
    //    .onSnapshot((querySnapshot) => {
    //      querySnapshot.forEach((doc) => {
    //        getWomenDataFromFirebase.push({ ...doc.data(), key: doc.id });
    //      });
    //      setDataWomens(getWomenDataFromFirebase);
    //    });

    // Mobile Data Fetching
    const getMobileDataFromFirebase = [];
    onSnapshot(
      collection(database, "collection", "mobile", "lists"),
      (snapshot) => {
        // console.log(snapshot.docs.map((doc) => doc.data()));
        snapshot.docs.map((doc) => {
          getMobileDataFromFirebase.push({ ...doc.data(), key: doc.id });
        });
        setDataMobile(getMobileDataFromFirebase);
      }
    );
    // database.collection('collection').doc("mobile").collection("lists").onSnapshot((querySnapshot) => {
    //    querySnapshot.forEach((doc) => {
    //       getMobileDataFromFirebase.push({ ...doc.data(), key: doc.id });
    //    });
    //    setDataMobile(getMobileDataFromFirebase);
    // });

    // //Cart Data Fetching
    if (user !== null) {
      //  console.log(collection(database, "users",`${user}`,'cart'))
      onSnapshot(
        collection(database, "users", `${user}`, "cart"),
        (snapshot) => {
          console.log(
            "data",
            snapshot.docs.map((doc) => doc.data())
          );
          const fdata = [];
          snapshot.docs.map((item) => {
            fdata.push({ ...item.data(), key: item.id });
          });
          setDataCart(fdata);
        }
      );
    }
    //    database.collection('users').doc(user).collection('cart').onSnapshot((a) => {
    //       const fdata = [];
    //       a.forEach((item) => {
    //          fdata.push({ ...item.data(), key: item.id })

    //       })
    //       setDataCart(fdata)
    //    })

    //  dataOrder
    onSnapshot(
      collection(database, "users", `${user}`, "order"),
      (snapshot) => {
        //console.log(snapshot.docs.map((doc) => doc.data()));
        const odata = [];
        snapshot.docs.map((item) => {
          odata.push({ ...item.data(), key: item.id });
        });
        setDataOrder(odata);
      }
    );

    //    database.collection('users').doc(user).collection('order').onSnapshot((a) => {
    //       const odata = [];
    //       a.forEach((item) => {
    //          odata.push({ ...item.data(), key: item.id })
    //       })
    //       setDataOrder(odata)
    //    })

    //Wishlist Data from Firebase
    onSnapshot(collection(database, "users", `${user}`, "wish"), (snapshot) => {
      console.log(snapshot.docs.map((doc) => doc.data()));
      const getWishDataFromFirebase = [];
      snapshot.docs.map((doc) => {
        getWishDataFromFirebase.push({ ...doc.data(), key: doc.id });
      });
      setDataWishlist(getWishDataFromFirebase);
    });
    //    database.collection('users').doc(user).collection("wish").onSnapshot((querySnapshot) => {
    //       const getWishDataFromFirebase = [];
    //       querySnapshot.forEach((doc) => {
    //          getWishDataFromFirebase.push({ ...doc.data(), key: doc.id });
    //       });
    //       setDataWishlist(getWishDataFromFirebase);
    //    });

    //  save and total cart
    onSnapshot(collection(database, "users", `${user}`, "cart"), (snapshot) => {
      let total = 0;
      let save = 0;
      let oldPriceTotal = 0;
      //console.log(snapshot.docs.map((doc) => doc.data()));
      snapshot.docs.map((doc) => {
        oldPriceTotal = oldPriceTotal + Number(doc.data().oldPrice);
        total = total + Number(doc.data().price);
        save = save + Number(doc.data().oldPrice - doc.data().price);
      });
      setCartSave(save);
      setOldPriceCartTotal(oldPriceTotal);
      setCartTotal(total);
    });
    //    database.collection('users').doc(user).collection('cart').onSnapshot((a) => {
    //       let total = 0;
    //       let save = 0;
    //       a.forEach((item) => {
    //          total = total + Number(item.data().price)
    //          save = save + Number(item.data().oldPrice - item.data().price)
    //       })
    //       setCartSave(save)
    //       setCartTotal(total)
    //    })

    //  order save total
    onSnapshot(
      collection(database, "users", `${user}`, "order"),
      (snapshot) => {
        let total = 0;
        let save = 0;
        // console.log(snapshot.docs.map((doc) => doc.data()));
        snapshot.docs.map((item) => {
          total = total + Number(item.data().price);
          save = save + Number(item.data().oldPrice - item.data().price);
        });
        setOrderSave(save);
        setOrderTotal(total);
      }
    );

    //    database.collection('users').doc(user).collection('order').onSnapshot((a) => {
    //       let total = 0;
    //       let save = 0;
    //       a.forEach((item) => {
    //          total = total + Number(item.data().price)
    //          save = save + Number(item.data().oldPrice - item.data().price)
    //       })
    //       setOrderSave(save)
    //       setOrderTotal(total)
    //    })

    // wish save and toatl
    onSnapshot(collection(database, "users", `${user}`, "wish"), (snapshot) => {
      let total = 0;
      let save = 0;
      //console.log(snapshot.docs.map((doc) => doc.data()));
      snapshot.docs.map((item) => {
        total = total + Number(item.data().price);
        save = save + Number(item.data().oldPrice - item.data().price);
      });
      setWishSave(save);
      setWishTotal(total);
    });

    //    database.collection('users').doc(user).collection('wish').onSnapshot((a) => {
    //       let total = 0;
    //       let save = 0;
    //       a.forEach((item) => {
    //          total = total + Number(item.data().price)
    //          save = save + Number(item.data().oldPrice - item.data().price)
    //       })
    //       setWishSave(save)
    //       setWishTotal(total)
    //    })

    // //address
    const getAddress = [];
    onSnapshot(
      collection(database, "users", `${user}`, "shipping"),
      (snapshot) => {
        //   console.log(snapshot.docs.map((doc) => doc.data()));
        snapshot.docs.map((doc) => {
          getAddress.push({ ...doc.data(), key: doc.id });
        });
        setAdd(getAddress);
      }
    );

    // const getAddress = [];
    // database.collection('users').doc(user).collection('shipping').onSnapshot((querySnapshot) => {
    //    querySnapshot.forEach((doc) => {
    //       getAddress.push({ ...doc.data(), key: doc.id });
    //    });
    //    setAdd(getAddress);
    // });
    // }
  }, [user]);

  return (
    <StateContext.Provider
      value={{
        mens: [dataMens, setDataMens],
        womens: [dataWomens, setDataWomens],
        userdata: [user, setUser],
        mobile: [dataMobile, setDataMobile],
        cart: [dataCart, setDataCart],
        wish: [dataWishlist, setDataWishlist],
        cartsave: [cartSave, setCartSave],
        carttotal: [cartTotal, setCartTotal],
        wishsave: [wishSave, setWishSave],
        wishtotal: [wishTotal, setWishTotal],
        addr: [add, setAdd],
        oder: [dataOrder, setDataOrder],
        oTotal: [orderTotal, setOrderTotal],
        oSave: [orderSave, setOrderSave],
        oldPTotal: [oldPriceCartTotal, setOldPriceCartTotal],
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};
