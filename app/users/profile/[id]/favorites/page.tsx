import Favorites from "@/components/favorites/Favorites";
import style from "./favoritesCont.module.css"

const FavoritesPage = () => {

    return (
        <main className={style.mainCont}>
            <div className={style.title}>
                <h1 className="text-4xl text-center py-2">My favorites</h1>
            </div>
            <Favorites />;
        </main>
    )
};

export default FavoritesPage;