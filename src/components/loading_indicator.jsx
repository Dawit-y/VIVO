function LoadingIndicator() {
  return (
    <>
      <div class="flex items-center justify-center h-screen">
        <div class="relative">
          <div class="h-12 w-12 rounded-full border-t-8 border-b-8 border-gray-200"></div>
          <div class="absolute top-0 left-0 h-12 w-12 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
        </div>
      </div>
    </>
  );
}
export default LoadingIndicator;
