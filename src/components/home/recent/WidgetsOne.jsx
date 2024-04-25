import { Button, Typography } from "@material-tailwind/react";

export function WidgetsOne() {
  return (
<section className="m-10">
  <div className="p-10 rounded-l-xl border border-blue-gray-100 rounded-xl bg-no-repeat lg:bg-contain bg-cover bg-right" >
    <Typography variant="small" color="blue-gray" className="font-bold mb-2">
      Upcoming Events
    </Typography>
    <Typography variant="h3" color="blue-gray">
      Tech Summit: Shaping Tomorrow
    </Typography>
    <Typography className="mt-2 mb-6 text-base font-normal text-gray-500">
      Prepare to be part of dynamic conversations that will redefine the boundaries.
    </Typography>
    <Button variant="outlined" className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      join now
    </Button>
  </div>
</section>

  );
}
export default WidgetsOne;