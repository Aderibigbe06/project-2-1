
import "./globals.css";
import { Provider } from "@/components/ui/provider";




// export default function RootLayout( { 
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>
//         {children}
//       </body>
//     </html>
//   );
// }


export default function RootLayout(props: {children: React.ReactNode }) {
  const {children} = props
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
