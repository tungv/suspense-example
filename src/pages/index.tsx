import { PropsWithChildren } from "react";

export default function HomePage() {
  return (
    <div className="bg-slate-100 m-auto w-[960px] h-screen">
      <HomePageContent />
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
              <div>Home</div>
            </li>
            <li>
              <div>About</div>
            </li>
            <li>
              <div>Contact</div>
            </li>
          </ul>
        </nav>
      </header>

      <div className="flex flex-row gap-4">
        <aside className="w-36 px-4">
          <h3>Menu</h3>
          <ul>
            <li>
              <div>Accounts</div>
            </li>
            <li>
              <div>Orders</div>
            </li>
            <li>
              <div>Products</div>
            </li>
          </ul>
        </aside>

        <main className="flex-1 flex flex-col gap-2 px-2">
          <div>
            <Post title="post 1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum at
              facilis dolorum sunt harum veniam eos, cum laudantium ab quisquam
              inventore, odio, neque aliquam. Dolor accusantium natus
              reprehenderit consequuntur temporibus! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Iusto architecto tempora similique
              iste maiores, ab hic id, pariatur molestiae perferendis error,
              molestias quasi! Ea, eligendi perferendis. Facilis mollitia,
              accusantium fugit dolorem porro officiis? Eos saepe, temporibus,
              tempora vero culpa blanditiis deserunt et pariatur illum
              distinctio inventore similique molestias possimus eaque! Commodi
              illum corrupti aut iusto, quidem quod voluptatem aperiam omnis
              porro! Rem quaerat quo deserunt doloribus animi! Rerum, saepe nisi
              assumenda facere pariatur quaerat necessitatibus dignissimos sint
              provident eius consectetur, laboriosam vero fuga excepturi
              deserunt. Odit, repellat expedita, molestiae asperiores distinctio
              non ipsa quisquam voluptatem ratione earum architecto nulla minus?
            </Post>
          </div>
          <div>
            <Post title="post 2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum at
              facilis dolorum sunt harum veniam eos, cum laudantium ab quisquam
              inventore, odio, neque aliquam. Dolor accusantium natus
              reprehenderit consequuntur temporibus! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Iusto architecto tempora similique
              iste maiores, ab hic id, pariatur molestiae perferendis error,
              molestias quasi! Ea, eligendi perferendis. Facilis mollitia,
              accusantium fugit dolorem porro officiis? Eos saepe, temporibus,
              tempora vero culpa blanditiis deserunt et pariatur illum
              distinctio inventore similique molestias possimus eaque! Commodi
              illum corrupti aut iusto, quidem quod voluptatem aperiam omnis
              porro! Rem quaerat quo deserunt doloribus animi! Rerum, saepe nisi
              assumenda facere pariatur quaerat necessitatibus dignissimos sint
              provident eius consectetur, laboriosam vero fuga excepturi
              deserunt. Odit, repellat expedita, molestiae asperiores distinctio
              non ipsa quisquam voluptatem ratione earum architecto nulla minus?
            </Post>
          </div>
          <div>
            <Post title="post 3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum at
              facilis dolorum sunt harum veniam eos, cum laudantium ab quisquam
              inventore, odio, neque aliquam. Dolor accusantium natus
              reprehenderit consequuntur temporibus! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Iusto architecto tempora similique
              iste maiores, ab hic id, pariatur molestiae perferendis error,
              molestias quasi! Ea, eligendi perferendis. Facilis mollitia,
              accusantium fugit dolorem porro officiis? Eos saepe, temporibus,
              tempora vero culpa blanditiis deserunt et pariatur illum
              distinctio inventore similique molestias possimus eaque! Commodi
              illum corrupti aut iusto, quidem quod voluptatem aperiam omnis
              porro! Rem quaerat quo deserunt doloribus animi! Rerum, saepe nisi
              assumenda facere pariatur quaerat necessitatibus dignissimos sint
              provident eius consectetur, laboriosam vero fuga excepturi
              deserunt. Odit, repellat expedita, molestiae asperiores distinctio
              non ipsa quisquam voluptatem ratione earum architecto nulla minus?
            </Post>
          </div>
          <div>
            <Post title="post 4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum at
              facilis dolorum sunt harum veniam eos, cum laudantium ab quisquam
              inventore, odio, neque aliquam. Dolor accusantium natus
              reprehenderit consequuntur temporibus! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Iusto architecto tempora similique
              iste maiores, ab hic id, pariatur molestiae perferendis error,
              molestias quasi! Ea, eligendi perferendis. Facilis mollitia,
              accusantium fugit dolorem porro officiis? Eos saepe, temporibus,
              tempora vero culpa blanditiis deserunt et pariatur illum
              distinctio inventore similique molestias possimus eaque! Commodi
              illum corrupti aut iusto, quidem quod voluptatem aperiam omnis
              porro! Rem quaerat quo deserunt doloribus animi! Rerum, saepe nisi
              assumenda facere pariatur quaerat necessitatibus dignissimos sint
              provident eius consectetur, laboriosam vero fuga excepturi
              deserunt. Odit, repellat expedita, molestiae asperiores distinctio
              non ipsa quisquam voluptatem ratione earum architecto nulla minus?
            </Post>
          </div>
        </main>
      </div>
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
