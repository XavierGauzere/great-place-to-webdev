<?php

namespace App\Controller\Front;

use App\Entity\City;
use App\Repository\CityRepository;
use App\Repository\ImageRepository;
use Exception;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CityController extends AbstractController
{
    /**
     * Cities List
     *
     * @Route("/cities", name="cities_list")
     */
    public function list(
        ImageRepository $imageRepository,
        PaginatorInterface $paginatorInterface, Request $request)
    {
        $images = $imageRepository->findByDistinctCityImage();

        $images = $paginatorInterface->paginate($images, $request->query->getInt('page', 1),6);

        return $this->render('front/cities/list.html.twig', [
            "images" => $images,
        ]);
    }

    /**
     * City Page
     * 
     * @Route("/cities/{id}", name="cities_detail", requirements={"id":"\d+"})
     */
    public function show($id, CityRepository $cityRepository, ImageRepository $imageRepository, Request $request): Response
    {
        $city = $cityRepository->find($id);
        if ($city === null) {
            throw new Exception("Nous n'avons pas encore de données sur cette ville", 404);
        }

        $images = $imageRepository->findByDistinctCityImage();

        return $this->render('front/cities/show.html.twig', [
            'cityId' => $id,
            'city' => $city,
            'images' => $images,
        ]);
    }
    
}


