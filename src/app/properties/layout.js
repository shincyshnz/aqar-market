export default function PropertiesLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      {/* Breadcrumbs */}
      <nav className="md:px-12 mb-9 md:mb-[6.11rem]">
        <div className="bg-section-bg-blue flex items-center justify-between min-h-32 lg:min-h-40 px-3 md:px-40 2xl:px-[17rem]">
          <div className="page-name">
            <h6 className="font-semibold text-xs lg:text-[1.125rem]">Properties List</h6>
          </div>

          <ol className="list-reset flex text-xs md:text-sm font-medium">
            <li>
              <a
                href="#"
                className="text-primary transition duration-150 ease-in-out hover:text-primary-accent-300 focus:text-primary-accent-300 active:text-primary-accent-300 motion-reduce:transition-none dark:text-primary-400"
              >Home</a
              >
            </li>
            <li>
              <span className="mx-2 text-neutral-400">/</span>
            </li>
            <li>
              <a
                href="#"
                className="text-secondary-blue transition duration-150 ease-in-out hover:text-primary-accent-300 focus:text-primary-accent-300 active:text-primary-accent-300 motion-reduce:transition-none dark:text-primary-400"
              >property list</a
              >
            </li>
          </ol>
        </div>
      </nav>

      {children}
    </section>
  )
}