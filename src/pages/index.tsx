import {
  Children,
  Fragment,
  PropsWithChildren,
  ReactNode,
  Suspense,
  useEffect,
  useReducer,
} from "react";
import DataHunger from "../components/DataHungry";

export default function HomePage() {
  const [ready, setReady] = useReducer((_) => true, false);

  useEffect(() => {
    setReady();
  }, []);

  if (!ready) {
    return null;
  }

  return (
    <div className="bg-slate-100 m-auto w-[960px] h-screen">
      <Suspense
        fallback={
          <div className="p-12 text-slate-800 text-xl flex flex-row items-center">
            <span>loading…</span>
          </div>
        }
      >
        <HomePageContent />
      </Suspense>
    </div>
  );
}

function HomePageContent() {
  return (
    <div className="flex flex-col gap-4">
      <header className="bg-amber-400 p-4">
        <nav>
          <ul className="flex flex-row items-center gap-4">
            <li>
              <DataHunger suspense duration="2s" tag="nav_home">
                Home
              </DataHunger>
            </li>
            <li>
              <DataHunger suspense duration="1s" tag="nav_about">
                About
              </DataHunger>
            </li>
            <li>
              <DataHunger suspense duration="1s" tag="nav_contact">
                Contact
              </DataHunger>
            </li>
          </ul>
        </nav>
      </header>

      <Suspense fallback={<BelowNavigationSkeleton />}>
        <div className="flex flex-row gap-4">
          <aside className="w-36 px-4">
            <h3>Menu</h3>
            <ul>
              <li>
                <DataHunger suspense duration="0.5s" tag="menu_accounts">
                  Accounts
                </DataHunger>
              </li>
              <li>
                <DataHunger suspense duration="2.1s" tag="menu_orders">
                  Orders
                </DataHunger>
              </li>
              <li>
                <DataHunger suspense duration="0.1s" tag="menu_products">
                  Products
                </DataHunger>
              </li>
            </ul>
          </aside>
          <main className="flex-1 flex flex-col gap-2 px-2">
            <SuspenseList fallback={<Skeleton />}>
              <DataHunger suspense duration="6s" tag="post 1">
                <Post title="post 1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Illum at facilis dolorum sunt harum veniam eos, cum laudantium
                  ab quisquam inventore, odio, neque aliquam. Dolor accusantium
                  natus reprehenderit consequuntur temporibus! Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. Iusto architecto
                  tempora similique iste maiores, ab hic id, pariatur molestiae
                  perferendis error, molestias quasi! Ea, eligendi perferendis.
                  Facilis mollitia, accusantium fugit dolorem porro officiis?
                  Eos saepe, temporibus, tempora vero culpa blanditiis deserunt
                  et pariatur illum distinctio inventore similique molestias
                  possimus eaque! Commodi illum corrupti aut iusto, quidem quod
                  voluptatem aperiam omnis porro! Rem quaerat quo deserunt
                  doloribus animi! Rerum, saepe nisi assumenda facere pariatur
                  quaerat necessitatibus dignissimos sint provident eius
                  consectetur, laboriosam vero fuga excepturi deserunt. Odit,
                  repellat expedita, molestiae asperiores distinctio non ipsa
                  quisquam voluptatem ratione earum architecto nulla minus?
                </Post>
              </DataHunger>
              <DataHunger suspense duration="1s" tag="post 2">
                <Post title="post 2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Illum at facilis dolorum sunt harum veniam eos, cum laudantium
                  ab quisquam inventore, odio, neque aliquam. Dolor accusantium
                  natus reprehenderit consequuntur temporibus! Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. Iusto architecto
                  tempora similique iste maiores, ab hic id, pariatur molestiae
                  perferendis error, molestias quasi! Ea, eligendi perferendis.
                  Facilis mollitia, accusantium fugit dolorem porro officiis?
                  Eos saepe, temporibus, tempora vero culpa blanditiis deserunt
                  et pariatur illum distinctio inventore similique molestias
                  possimus eaque! Commodi illum corrupti aut iusto, quidem quod
                  voluptatem aperiam omnis porro! Rem quaerat quo deserunt
                  doloribus animi! Rerum, saepe nisi assumenda facere pariatur
                  quaerat necessitatibus dignissimos sint provident eius
                  consectetur, laboriosam vero fuga excepturi deserunt. Odit,
                  repellat expedita, molestiae asperiores distinctio non ipsa
                  quisquam voluptatem ratione earum architecto nulla minus?
                </Post>
              </DataHunger>
              <DataHunger suspense duration="8s" tag="post 3">
                <Post title="post 3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Illum at facilis dolorum sunt harum veniam eos, cum laudantium
                  ab quisquam inventore, odio, neque aliquam. Dolor accusantium
                  natus reprehenderit consequuntur temporibus! Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. Iusto architecto
                  tempora similique iste maiores, ab hic id, pariatur molestiae
                  perferendis error, molestias quasi! Ea, eligendi perferendis.
                  Facilis mollitia, accusantium fugit dolorem porro officiis?
                  Eos saepe, temporibus, tempora vero culpa blanditiis deserunt
                  et pariatur illum distinctio inventore similique molestias
                  possimus eaque! Commodi illum corrupti aut iusto, quidem quod
                  voluptatem aperiam omnis porro! Rem quaerat quo deserunt
                  doloribus animi! Rerum, saepe nisi assumenda facere pariatur
                  quaerat necessitatibus dignissimos sint provident eius
                  consectetur, laboriosam vero fuga excepturi deserunt. Odit,
                  repellat expedita, molestiae asperiores distinctio non ipsa
                  quisquam voluptatem ratione earum architecto nulla minus?
                </Post>
              </DataHunger>
              <DataHunger suspense duration="2.4s" tag="post 4">
                <Post title="post 4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Illum at facilis dolorum sunt harum veniam eos, cum laudantium
                  ab quisquam inventore, odio, neque aliquam. Dolor accusantium
                  natus reprehenderit consequuntur temporibus! Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. Iusto architecto
                  tempora similique iste maiores, ab hic id, pariatur molestiae
                  perferendis error, molestias quasi! Ea, eligendi perferendis.
                  Facilis mollitia, accusantium fugit dolorem porro officiis?
                  Eos saepe, temporibus, tempora vero culpa blanditiis deserunt
                  et pariatur illum distinctio inventore similique molestias
                  possimus eaque! Commodi illum corrupti aut iusto, quidem quod
                  voluptatem aperiam omnis porro! Rem quaerat quo deserunt
                  doloribus animi! Rerum, saepe nisi assumenda facere pariatur
                  quaerat necessitatibus dignissimos sint provident eius
                  consectetur, laboriosam vero fuga excepturi deserunt. Odit,
                  repellat expedita, molestiae asperiores distinctio non ipsa
                  quisquam voluptatem ratione earum architecto nulla minus?
                </Post>
              </DataHunger>
            </SuspenseList>
          </main>
        </div>
      </Suspense>
    </div>
  );
}

function Post(props: PropsWithChildren<{ title: string }>) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h1 className="font-bold">{props.title}</h1>
      <div>{props.children}</div>
    </div>
  );
}

function Skeleton() {
  return (
    <div className="h-72 w-full bg-slate-200 rounded-lg animate-pulse"></div>
  );
}

function PostsSkeleton() {
  return (
    <div className="flex flex-col w-full gap-2">
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
}

function BelowNavigationSkeleton() {
  return (
    <div className="flex flex-row gap-4">
      <aside className="w-36 px-4">
        <Skeleton />
      </aside>
      <main className="flex-1 flex flex-col gap-2">
        <PostsSkeleton />
      </main>
    </div>
  );
}

function SuspenseList(props: PropsWithChildren<{ fallback: ReactNode }>) {
  const array = Children.toArray(props.children);
  const [head, ...tail] = [...array].reverse();

  const element = tail.reduce((acc, child, index) => {
    const nFallback = index + 2;
    const stackedFallback = [...Array(nFallback)].map((_, i) => (
      <Fragment key={i}>{props.fallback}</Fragment>
    ));
    return (
      <Suspense fallback={stackedFallback}>
        {child}
        {acc}
      </Suspense>
    );
  }, <Suspense fallback={props.fallback}>{head}</Suspense>);

  return <>{element}</>;
}
